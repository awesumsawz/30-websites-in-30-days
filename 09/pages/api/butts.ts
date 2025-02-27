import type { NextApiRequest as OriginalNextApiRequest, NextApiResponse } from 'next';

// Extend the NextApiRequest interface to include the method property
interface NextApiRequest extends OriginalNextApiRequest {
  method: string;
}

type ResponseData = {
  result: string;
  count: number;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      result: '', 
      count: 0,
      error: 'Method not allowed. Please use GET.' 
    });
  }

  // Get the count parameter from the query
  const { count } = req.query;
  
  // Convert to number and validate
  const numCount = Number(count);
  
  // Validate the input
  if (isNaN(numCount)) {
    return res.status(400).json({ 
      result: '', 
      count: 0,
      error: 'Please provide a valid number.' 
    });
  }
  
  if (!Number.isInteger(numCount)) {
    return res.status(400).json({ 
      result: '', 
      count: 0,
      error: 'Please provide an integer.' 
    });
  }
  
  if (numCount < 1 || numCount > 100) {
    return res.status(400).json({ 
      result: '', 
      count: 0,
      error: 'Please provide a number between 1 and 100.' 
    });
  }
  
  // Generate the result
  const result = 'butts '.repeat(numCount).trim();
  
  // Return the result
  res.status(200).json({ result, count: numCount });
}
