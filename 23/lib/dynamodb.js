const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

// Initialize DynamoDB client
const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: process.env.AWS_REGION || 'us-east-2'
});

const TABLE_NAME = 'thinkbigg-contact-submissions';

/**
 * Save a contact form submission to DynamoDB
 * @param {Object} submission - The contact form submission data
 * @returns {Promise<Object>} - The saved submission with id and timestamp
 */
async function saveContactSubmission(submission) {
  const timestamp = new Date().toISOString();
  const id = uuidv4();
  
  const item = {
    id,
    timestamp,
    ...submission,
    status: 'new'
  };
  
  const params = {
    TableName: TABLE_NAME,
    Item: item
  };
  
  try {
    await dynamoDB.put(params).promise();
    return item;
  } catch (error) {
    console.error('Error saving contact submission to DynamoDB:', error);
    throw error;
  }
}

/**
 * Get all contact form submissions from DynamoDB
 * @returns {Promise<Array>} - Array of contact submissions
 */
async function getAllContactSubmissions() {
  const params = {
    TableName: TABLE_NAME
  };
  
  try {
    const result = await dynamoDB.scan(params).promise();
    return result.Items;
  } catch (error) {
    console.error('Error fetching contact submissions from DynamoDB:', error);
    throw error;
  }
}

/**
 * Get a contact submission by ID
 * @param {string} id - The submission ID
 * @returns {Promise<Object>} - The contact submission
 */
async function getContactSubmissionById(id) {
  const params = {
    TableName: TABLE_NAME,
    Key: { id }
  };
  
  try {
    const result = await dynamoDB.get(params).promise();
    return result.Item;
  } catch (error) {
    console.error(`Error fetching contact submission with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Update a contact submission status
 * @param {string} id - The submission ID
 * @param {string} status - The new status
 * @returns {Promise<Object>} - The updated submission
 */
async function updateContactSubmissionStatus(id, status) {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
    UpdateExpression: 'set #status = :status',
    ExpressionAttributeNames: {
      '#status': 'status'
    },
    ExpressionAttributeValues: {
      ':status': status
    },
    ReturnValues: 'ALL_NEW'
  };
  
  try {
    const result = await dynamoDB.update(params).promise();
    return result.Attributes;
  } catch (error) {
    console.error(`Error updating contact submission status for ID ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a contact submission
 * @param {string} id - The submission ID
 * @returns {Promise<void>}
 */
async function deleteContactSubmission(id) {
  const params = {
    TableName: TABLE_NAME,
    Key: { id }
  };
  
  try {
    await dynamoDB.delete(params).promise();
  } catch (error) {
    console.error(`Error deleting contact submission with ID ${id}:`, error);
    throw error;
  }
}

module.exports = {
  saveContactSubmission,
  getAllContactSubmissions,
  getContactSubmissionById,
  updateContactSubmissionStatus,
  deleteContactSubmission
}; 