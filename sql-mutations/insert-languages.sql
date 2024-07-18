INSERT INTO language (name)
VALUES
('HTML'),
('CSS'),
('JavaScript');

SELECT * FROM language
WHERE name IN ('HTML', 'CSS', 'JavaScript');
