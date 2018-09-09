DROP DATABASE IF EXISTS stockDB;
CREATE database stockDB;

USE stockDB;

CREATE TABLE stock (
-- YOUR CODE HERE --

id INTEGER(11) AUTO_INCREMENT NOT NULL,
Date DATE,
Open FLOAT,
High FLOAT,
Low FLOAT,
Close FLOAT,
Volume INTEGER(12),

PRIMARY KEY (id)






-- END CODE AREA --
);

SELECT * FROM stock;


