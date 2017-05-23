--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Snacks (
  id   INTEGER PRIMARY KEY,
  name TEXT    NOT NULL,
  amount INTEGER NOT NULL,
  cost NUMERIC NOT NULL,
  createdOn DATE NOT NULL
);

CREATE TABLE SnackTypes (
  id          INTEGER PRIMARY KEY,
  name  TEXT NOT NULL,
  price       NUMERIC NOT NULL
);

CREATE TABLE Compensations (
    id INTEGER PRIMARY KEY,
    amount NUMERIC NOT NULL,
    createdOn DATE NOT NULL
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Snacks;
DROP TABLE SnackTypes;
DROP TABLE Compensations;