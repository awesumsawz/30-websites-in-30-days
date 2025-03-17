-- -------------------------------------------------------------
-- TablePlus 6.3.2(586)
--
-- https://tableplus.com/
--
-- Database: thinkbigg_db
-- Generation Time: 2025-03-16 21:32:29.0080
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."contact_page";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS contact_id_seq;

-- Table Definition
CREATE TABLE "public"."contact_page" (
    "id" int4 NOT NULL DEFAULT nextval('contact_id_seq'::regclass),
    "short_name" varchar NOT NULL,
    "slug" varchar NOT NULL,
    "title" varchar NOT NULL,
    "intro" varchar NOT NULL,
    "form_enabled" bool NOT NULL DEFAULT true,
    "messages_success" varchar NOT NULL,
    "messages_error" varchar NOT NULL,
    "updated_at" timestamptz(3) NOT NULL DEFAULT now(),
    "created_at" timestamptz(3) NOT NULL DEFAULT now(),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."services";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS services_id_seq;

-- Table Definition
CREATE TABLE "public"."services" (
    "id" int4 NOT NULL DEFAULT nextval('services_id_seq'::regclass),
    "short_name" varchar NOT NULL,
    "slug" varchar NOT NULL,
    "title" varchar NOT NULL,
    "intro" varchar NOT NULL,
    "list_title" varchar NOT NULL DEFAULT 'Key Features'::character varying,
    "tldr" varchar NOT NULL,
    "cta_box_cta_title" varchar NOT NULL DEFAULT 'Let''''s build something awesome!'::character varying,
    "cta_box_cta_text" varchar NOT NULL DEFAULT 'I like building cool stuff. If you have a project in mind, let''''s talk!'::character varying,
    "cta_box_cta_button_text" varchar NOT NULL DEFAULT 'Get in touch'::character varying,
    "cta_box_cta_button_link" varchar NOT NULL DEFAULT '/contact'::character varying,
    "updated_at" timestamptz(3) NOT NULL DEFAULT now(),
    "created_at" timestamptz(3) NOT NULL DEFAULT now(),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."services_list_items";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."services_list_items" (
    "_order" int4 NOT NULL,
    "_parent_id" int4 NOT NULL,
    "id" varchar NOT NULL,
    "item" varchar NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."contact_page" ("id", "short_name", "slug", "title", "intro", "form_enabled", "messages_success", "messages_error", "updated_at", "created_at") VALUES
(1, 'contact', '/contact', 'Contact Me', 'Heads up! The contact form is on its way, but hey, no worries! You can still reach me the old-fashioned way! Shoot me an email at contact@thinkbigg.dev, and I''ll get back to you within 48 hours.
Looking forward to hearing from you!', 't', 'success', 'failed', '2025-03-16 07:15:44.652+00', '2025-03-16 07:15:44.648+00');

INSERT INTO "public"."services" ("id", "short_name", "slug", "title", "intro", "list_title", "tldr", "cta_box_cta_title", "cta_box_cta_text", "cta_box_cta_button_text", "cta_box_cta_button_link", "updated_at", "created_at") VALUES
(1, 'web', '/services/web', 'Custom Websites Built for Your Business', 'Need a website that actually works for you? I build modern, fast, and easy-to-manage websites using Laravel, Next.js, and WordPress—tailored to fit your business, not the other way around. Whether you need a sleek marketing site, a powerful e-commerce platform, or a fully custom web app, I''ve got you covered.', 'Key Features', 'No cookie-cutter templates. No bloated code. Just clean, efficient, and effective web development to help your business grow.', 'Let''s build something awesome!', 'I like building cool stuff. If you have a project in mind, let''s talk!', 'Get in touch', '/contact', '2025-03-16 06:45:37.698+00', '2025-03-16 06:45:37.692+00'),
(2, 'cloud', '/services/cloud', 'Cloud Solutions That Scale as You Grow', 'Whether you need to migrate to the cloud, streamline your deployments, or optimize your infrastructure costs, I help businesses harness the power of AWS, GitHub, and modern cloud technologies to keep things running smoothly—without the headaches.', 'Key Features', 'No overcomplicated setups. No mystery pricing. Just practical cloud solutions that help your business grow.', 'Let''s build something awesome!', 'I like building cool stuff. If you have a project in mind, let''s talk!', 'Get in touch', '/contact', '2025-03-16 06:46:52.296+00', '2025-03-16 06:46:52.292+00'),
(3, 'consulting', '/services/consulting', 'Smart Strategies for Digital Growth', 'Running a business in today''s digital world can be overwhelming. I help small businesses cut through the noise with practical strategies to grow their online presence, streamline operations, and make smarter tech choices—without the corporate jargon.', 'Key Features', 'No fluff. No generic advice. Just real, actionable insights—and the hands-on support you need to get things done.', 'Let''s build something awesome!', 'I like building cool stuff. If you have a project in mind, let''s talk!', 'Get in touch', '/contact', '2025-03-16 06:48:06.46+00', '2025-03-16 06:48:06.457+00');

INSERT INTO "public"."services_list_items" ("_order", "_parent_id", "id", "item") VALUES
(1, 1, '67d67336296e439779619a20', 'Custom-built sites using Laravel’s MVC architecture for robust, scalable web applications'),
(2, 1, '67d67339296e439779619a22', 'Fast & SEO-friendly websites with Next.js, leveraging server-side rendering and static generation'),
(3, 1, '67d6733a296e439779619a24', 'WordPress expertise for easy-to-manage sites, including custom themes and plugins'),
(4, 1, '67d6733b296e439779619a26', 'E-commerce solutions that don’t just look good, but convert visitors into customers'),
(5, 1, '67d6733c296e439779619a28', 'Performance & security optimizations to keep your site running smoothly'),
(1, 2, '67d673b0296e439779619a2a', 'AWS architecture & deployment - From EC2 and S3 to Lambda and RDS, I design and implement scalable, cost-effective cloud solutions.'),
(2, 2, '67d673b2296e439779619a2c', 'CI/CD & DevOps workflows - Automate deployments, speed up development, and keep things running smoothly with GitHub Actions, Docker, and Kubernetes.'),
(3, 2, '67d673b3296e439779619a2e', 'Cloud cost optimization - Avoid unnecessary expenses with smart infrastructure management and scaling strategies.'),
(4, 2, '67d673b4296e439779619a30', 'Security-first approach - Best practices for cloud security, including IAM, encryption, and compliance.'),
(5, 2, '67d673b5296e439779619a32', 'Serverless & containerized apps - Build and deploy highly efficient applications with serverless functions and container orchestration.'),
(1, 3, '67d67403296e439779619a34', 'Digital strategy that works - Build a clear, actionable plan to attract and retain customers online.'),
(2, 3, '67d67404296e439779619a36', 'Tech stack recommendations - Choose the right tools and platforms to keep your business running smoothly (without overcomplicating things).'),
(3, 3, '67d67405296e439779619a38', 'Workflow & process optimization - Automate tasks, improve efficiency, and get more done with less effort.'),
(4, 3, '67d67406296e439779619a3a', 'Growth hacking & marketing - Find creative ways to boost traffic, increase conversions, and grow your audience.'),
(5, 3, '67d67406296e439779619a3c', 'Project management & execution - Whether it''s launching a new website, migrating to the cloud, or refining internal processes, I keep projects moving forward, on time, and within budget.');



-- Indices
CREATE UNIQUE INDEX contact_pkey ON public.contact_page USING btree (id);
CREATE INDEX contact_page_updated_at_idx ON public.contact_page USING btree (updated_at);
CREATE INDEX contact_page_created_at_idx ON public.contact_page USING btree (created_at);


-- Indices
CREATE INDEX services_updated_at_idx ON public.services USING btree (updated_at);
CREATE INDEX services_created_at_idx ON public.services USING btree (created_at);
ALTER TABLE "public"."services_list_items" ADD FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE CASCADE;


-- Indices
CREATE INDEX services_list_items_order_idx ON public.services_list_items USING btree (_order);
CREATE INDEX services_list_items_parent_id_idx ON public.services_list_items USING btree (_parent_id);
