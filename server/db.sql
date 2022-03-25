

CREATE TABLE animals (
    id SERIAL,
    commonname character varying(255),
    scientificname character varying(255),
    total_wild INTEGER,
    conservation_status_code VARCHAR (10),
    healthy BOOL,
    creation_timestamp DATE
);

CREATE TABLE users(
    first_name varchar(30),
    last_name varchar(30),


)

CREATE TABLE locations(
    city_name character varying(30),
    location point
)
