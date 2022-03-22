--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS techtonica1;
--
-- Name: techtonica1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE techtonica1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE techtonica1 OWNER TO postgres;

\connect techtonica1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: myanimals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.myanimals (
    id integer NOT NULL,
    commonname character varying(255),
    scientificname character varying(255),
    total_wild INTEGER (10),
    conservation_status_code VARCHAR (10),
    healthy BOOL (1),
    creation_timestamp DATE,

);


ALTER TABLE public.myanimals OWNER TO postgres;

--
-- Name: myanimals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.myanimals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.myanimals_id_seq OWNER TO postgres;

--
-- Name: myanimals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.myanimals_id_seq OWNED BY public.myanimals.id;


--
-- Name: myanimals id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.myanimals ALTER COLUMN id SET DEFAULT nextval('public.myanimals_id_seq'::regclass);


--
-- Data for Name: myanimals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.myanimals (id, commonname, scientificname) FROM stdin;
1	Gomez	Andrea
2	Lee	Becca
3	Smith	Will
4	Pond	Kate
5	Lasso	Jamie
7	Rodriguez	Arepa
8	Smith	Crush
9	Fonca	Billy
10	Gomez	Teresa
11	Tres	Prueba
12	Cuatro	Prueba
13	Cinco	Prueba
\.


--
-- Name: myanimals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.myanimals_id_seq', 13, true);


--
-- Name: myanimals myanimals_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.myanimals
    ADD CONSTRAINT myanimals_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

