-- First, insert the services
INSERT INTO services (
  short_name,
  slug,
  title,
  intro,
  list_title,
  tldr,
  cta_box_cta_title,
  cta_box_cta_text,
  cta_box_cta_button_text,
  cta_box_cta_button_link,
  updated_at,
  created_at
) VALUES
(
  'Web Development',
  'web',
  'Web Development Services',
  'Modern, fast, and SEO-friendly web applications built with cutting-edge technologies.',
  'Key Features',
  'Get your web project started with modern tech stack and best practices.',
  'Let''s build something awesome!',
  'I like building cool stuff. If you have a project in mind, let''s talk!',
  'Get in touch',
  '/contact',
  NOW(),
  NOW()
),
(
  'Cloud Services',
  'cloud',
  'Cloud Infrastructure Services',
  'Scalable and secure cloud solutions for your business needs.',
  'Key Features',
  'Scale your infrastructure with confidence using modern cloud practices.',
  'Let''s build something awesome!',
  'I like building cool stuff. If you have a project in mind, let''s talk!',
  'Get in touch',
  '/contact',
  NOW(),
  NOW()
),
(
  'Consulting',
  'consulting',
  'Technical Consulting Services',
  'Expert guidance on technology strategy and implementation.',
  'Key Features',
  'Get expert advice to make the right technical decisions for your project.',
  'Let''s build something awesome!',
  'I like building cool stuff. If you have a project in mind, let''s talk!',
  'Get in touch',
  '/contact',
  NOW(),
  NOW()
);

-- Then, insert the list items for each service
WITH web_service AS (
  SELECT id FROM services WHERE slug = 'web'
),
cloud_service AS (
  SELECT id FROM services WHERE slug = 'cloud'
),
consulting_service AS (
  SELECT id FROM services WHERE slug = 'consulting'
)
INSERT INTO services_list_items (_order, _parent_id, id, item)
SELECT 0, id, 'web-item-1', 'Next.js and React Development' FROM web_service
UNION ALL
SELECT 1, id, 'web-item-2', 'SEO Optimization' FROM web_service
UNION ALL
SELECT 2, id, 'web-item-3', 'Performance Tuning' FROM web_service
UNION ALL
SELECT 3, id, 'web-item-4', 'Responsive Design' FROM web_service
UNION ALL
SELECT 0, id, 'cloud-item-1', 'AWS/GCP/Azure Setup' FROM cloud_service
UNION ALL
SELECT 1, id, 'cloud-item-2', 'Infrastructure as Code' FROM cloud_service
UNION ALL
SELECT 2, id, 'cloud-item-3', 'DevOps Automation' FROM cloud_service
UNION ALL
SELECT 3, id, 'cloud-item-4', 'Cloud Security' FROM cloud_service
UNION ALL
SELECT 0, id, 'consulting-item-1', 'Architecture Design' FROM consulting_service
UNION ALL
SELECT 1, id, 'consulting-item-2', 'Tech Stack Selection' FROM consulting_service
UNION ALL
SELECT 2, id, 'consulting-item-3', 'Code Reviews' FROM consulting_service
UNION ALL
SELECT 3, id, 'consulting-item-4', 'Team Training' FROM consulting_service; 