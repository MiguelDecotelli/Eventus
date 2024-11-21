INSERT IGNORE INTO cities (id, name, state)
VALUES (1, 'Gramado', 'RS');

INSERT IGNORE INTO cities (id, name, state)
VALUES (2, 'Porto Alegre', 'RS');

INSERT IGNORE INTO cities (id, name, state)
VALUES (3, 'Canela', 'RS');

INSERT IGNORE INTO cities (id, name, state)
VALUES (4, 'São Paulo', 'SP');

INSERT IGNORE INTO cities (id, name, state)
VALUES (5, 'Rio de Janeiro', 'RJ');

INSERT IGNORE INTO cities (id, name, state)
VALUES (6, 'Curitiba', 'PR');

INSERT IGNORE INTO cities (id, name, state)
VALUES (7, 'Florianópolis', 'SC');

INSERT IGNORE INTO cities (id, name, state)
VALUES (8, 'Belo Horizonte', 'MG');

INSERT IGNORE INTO cities (id, name, state)
VALUES (9, 'Brasília', 'DF');

INSERT IGNORE INTO cities (id, name, state)
VALUES (10, 'Salvador', 'BA');

INSERT IGNORE INTO cities (id, name, state)
VALUES (11, 'Fortaleza', 'CE');

INSERT IGNORE INTO cities (id, name, state)
VALUES (12, 'Recife', 'PE');

INSERT IGNORE INTO cities (id, name, state)
VALUES (13, 'Belém', 'PA');

INSERT IGNORE INTO cities (id, name, state)
VALUES (14, 'Manaus', 'AM');

INSERT IGNORE INTO cities (id, name, state)
VALUES (15, 'Goiânia', 'GO');

INSERT IGNORE INTO cities (id, name, state)
VALUES (16, 'Natal', 'RN');

INSERT IGNORE INTO cities (id, name, state)
VALUES (17, 'João Pessoa', 'PB');

-- Endereços em Gramado (cities_id = 1)
INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (1, '95670-000', 'Avenida Borges de Medeiros', 2101, 'Centro', 'Localizado na principal avenida de Gramado, perto de diversas atrações.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (2, '95670-000', 'Rua Coberta', 100, '', 'Área coberta central, conhecida por seus eventos e mercados.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (3, '95670-000', 'Avenida das Hortênsias', 1250, '', 'Localizada em uma das principais avenidas, rodeada por hortênsias.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (4, '95670-000', 'Rua São Pedro', 875, '', 'Rua tranquila, próxima ao centro e atrações turísticas.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (5, '95670-000', 'Avenida das Hortênsias', 1347, '', 'Local ideal para eventos grandes, na avenida principal.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (6, '95670-000', 'Praça Major Nicoletti', 60, '', 'Praça central de Gramado, um ponto de encontro popular.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (7, '95670-000', 'Avenida Borges de Medeiros', 555, 'Centro', 'Localização central, ideal para grandes eventos.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (8, '95670-000', 'Rua Garibaldi', 220, '', 'Rua movimentada, perto de várias lojas e restaurantes.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (9, '95670-000', 'Rua Garibaldi', 220, '', 'Rua movimentada, perto de várias lojas e restaurantes.', 1);

-- Endereços em Outras Cidades
INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (10, '01000-000', 'Rua Principal', 100, 'Bairro Central', 'Localização central em São Paulo, perto de diversos pontos de interesse.', 4); -- São Paulo (cities_id = 4)

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (11, '20000-000', 'Avenida das Estrelas', 300, 'Sala 5', 'Avenida bem conhecida no Rio de Janeiro, perto de cinemas e teatros.', 5); -- Rio de Janeiro (cities_id = 5)

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (12, '30000-000', 'Praça da Dança', 50, '', 'Praça famosa em Curitiba, local de várias apresentações de dança.', 6); -- Curitiba (cities_id = 6)

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (13, '40000-000', 'Rua do Cinema', 250, '', 'Rua conhecida por suas casas de cinema, em São Paulo.', 4); -- São Paulo (cities_id = 4)

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (14, '50000-000', 'Avenida Eletrônica', 700, '', 'Local de eventos de música eletrônica em Florianópolis.', 7); -- Florianópolis (cities_id = 7)

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (15, '60000-000', 'Parque Teatral', 150, '', 'Parque conhecido por suas apresentações teatrais ao ar livre.', 8); -- Belo Horizonte (cities_id = 8)

-- Endereços adicionais em Gramado
INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (21, '95670-000', 'Rua Coberta', 50, '', 'Área coberta central, conhecida por seus eventos e mercados.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (22, '95670-000', 'Avenida das Hortênsias', 400, '', 'Localizada em uma das principais avenidas, rodeada por hortênsias.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (23, '95670-000', 'Rua São Pedro', 200, '', 'Rua tranquila, próxima ao centro e atrações turísticas.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (24, '95670-000', 'Avenida Borges de Medeiros', 300, '', 'Localizado na principal avenida de Gramado, perto de diversas atrações.', 1);

INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (25, '95670-000', 'Rua Garibaldi', 150, '', 'Rua movimentada, perto de várias lojas e restaurantes.', 1);

-- Endereços em Recife
INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (16, '50000-000', 'Avenida Boa Viagem', 1000, '', 'Avenida famosa por suas praias e eventos.', 12);

-- Endereços em Fortaleza
INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (17, '60000-000', 'Avenida Beira Mar', 2000, '', 'Avenida conhecida pelas lindas vistas do mar.', 11);

-- Endereços em Natal
INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (18, '59000-000', 'Avenida Engenheiro Roberto Freire', 1500, '', 'Avenida movimentada com muitas opções de entretenimento.', 16);

-- Endereços em João Pessoa
INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (19, '58000-000', 'Avenida Cabo Branco', 500, '', 'Avenida famosa por sua orla e eventos culturais.', 17);

-- Endereços em Salvador
INSERT IGNORE INTO address (id, cep, street, street_number, complement, description, cities_id)
VALUES (20, '40000-000', 'Avenida Sete de Setembro', 3000, '', 'Avenida histórica conhecida pelo Carnaval de Salvador.', 10);

-- Eventos em Gramado
INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (1, 'Festival de Cinema', '2024-08-01', '2024-08-30', 'Festival de Cinema de Gramado, um dos mais prestigiados eventos de cinema da América Latina, exibindo filmes nacionais e internacionais', 'https://planalto.com.br/wp-content/uploads/sites/3/2024/01/festival-de-cinema-de-gramado-2023.jpg', 1, 1);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (2, 'Festival Internacional de Música', '2024-01-25', '2024-02-10', 'Gramado In Concert, um festival internacional de música que reúne artistas de várias partes do mundo para apresentações únicas', 'https://i.ytimg.com/vi/Zf4PlzysVuM/hqdefault.jpg', 1, 2);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (3, 'Festa da Colônia', '2024-03-01', '2024-04-30', 'Festa da Colônia, uma celebração da cultura local com comidas típicas, danças folclóricas e muita diversão', 'https://gramadotur.rs.gov.br/wp-content/uploads/2017/06/27Colonia_0991.jpg', 1, 3);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (4, 'Vindima', '2024-02-08', '2024-03-15', 'Vindima em Gramado, uma festa tradicional que celebra a colheita da uva com diversas atividades culturais e gastronômicas', 'https://www.poehma.com.br/wp-content/uploads/2022/02/Blog-Vindima-em-Gramado.jpg', 1, 4);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (5, 'Rodeio Crioulo', '2024-02-08', '2024-02-11', 'Rodeio Crioulo Nacional de Gramado, um evento que reúne competições de rodeio e música tradicional gaúcha', 'https://cdn.leiafacil.com.br/wp-content/uploads/2022/02/IMG_8942.jpg', 1, 5);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (6, 'Gramado In Concert', '2024-01-26', '2024-02-03', '10º Gramado In Concert, a décima edição deste festival que é um dos principais eventos de música clássica no Brasil', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqETZOuIHGg2DSj0njQPJGZzZdaKFZ2uk8pQ&s', 1, 6);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (7, 'Día Mundial del Cáncer', '2024-02-04', '2024-02-04', 'Día Mundial del Cáncer, um evento de conscientização e arrecadação de fundos para a luta contra o câncer', '', 1, 7);

-- Eventos em Outras Cidades
INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (10, 'Mistério na Noite', '2024-11-20', '2024-11-25', 'Estreia do filme de suspense "Mistério na Noite", uma produção intrigante que vai prender a atenção do público do início ao fim', '', 1, 10);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (11, 'Stardust Pop', '2024-12-05', '2024-12-05', 'Show de pop com a banda Stardust, uma das mais populares bandas da atualidade, conhecida por seus hits contagiantes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVE5J01SckxQfqVEUi5e1AR7pLcMhaQq7AkA&s', 1, 11);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (12, 'Dança Livre', '2024-12-08', '2024-12-08', 'Apresentação de dança ao ar livre, um espetáculo que traz diversas coreografias e performances de dança', 'https://dancalivreadois.com/wp-content/uploads/2024/01/Aula-Inaugural-DL2-2024-Por-Orue-Brasileiro_ORUE3319-scaled-e1705160721205-768x435.jpg', 1, 12);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (13, 'Riso Total', '2024-11-25', '2024-11-30', 'Estreia do filme de comédia "Riso Total", uma comédia leve e divertida para toda a família', '', 1, 13);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (14, 'Electronic Vibes', '2024-12-15', '2024-12-15', 'Show de música eletrônica "Electronic Vibes", um evento com os melhores DJs e uma atmosfera eletrizante', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzyYRhQsVDlU6AlbiLdLxyEuOn7nsJZnXjEg&s', 1, 14);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (15, 'Festival de Teatro', '2024-12-18', '2024-12-20', 'Festival de teatro ao ar livre, apresentando peças teatrais de diversos gêneros e estilos', 'https://s2-g1.glbimg.com/RFqJQ2pDqelL6fJkw502BDdeIfM=/0x0:5184x3456/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/o/z/4uBvRfRPeNBZI1qSBMwQ/fit.jpg', 1, 15);

-- Eventos em Gramado
INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (16, 'Festival de Cinema de Gramado', '2024-08-01', '2024-08-10', 'O prestigiado Festival de Cinema de Gramado.', 'https://planalto.com.br/wp-content/uploads/sites/3/2024/01/festival-de-cinema-de-gramado-2023.jpg', 2, 21);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (18, 'Natal Luz', '2024-12-01', '2024-12-05', 'O encantador Natal Luz em Gramado.', 'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/10/natal-luz-gramado-capa1-1.jpg', 2, 23);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (19, 'Festa da Colônia alemã', '2024-03-10', '2024-03-15', 'A tradicional Festa da Colônia em Gramado.', 'https://gramado.blog.br/wp-content/uploads/2023/04/festa_dos_espantalhos_1_2018-1.webp', 2, 24);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (20, 'Chocofest', '2024-04-05', '2024-04-10', 'O delicioso festival de chocolate Chocofest.', 'https://malaprontagramado.com.br/wp-content/uploads/2020/11/rua-coberta-decorada-chocolate.jpg', 2, 25);

-- Eventos em Outras Cidades
INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (21, 'Festival do Maracatu', '2024-01-05', '2024-01-10', 'Festival de Maracatu em Recife, com diversas apresentações culturais.', 'https://images01.brasildefato.com.br/77665d7c309e147106154a1b997bc5af.jpeg', 2, 16);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (22, 'Carnaval de Fortaleza', '2024-02-20', '2024-02-25', 'O tradicional Carnaval de Fortaleza com blocos e trios elétricos.', 'https://cdn.brasildefato.com.br/media/1fddab9251ecbeb043da9fcdbcbc4f2d.jpeg', 2, 17);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (23, 'Festival de Verão de Natal', '2024-01-10', '2024-01-15', 'Festival de Verão em Natal com shows e atividades ao ar livre.', 'https://hilnethcorreia.com.br/wp-content/uploads/2023/12/dsgaggg-1.jpg', 2, 18);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (24, 'Festival das Flores', '2024-02-05', '2024-02-10', 'Festival de Flores em João Pessoa, com exposições e feiras.', 'https://clickpb-wordpress.s3.amazonaws.com/wp-content/uploads/2023/12/31180426/feira_de_holambra.jpeg', 2, 19);

INSERT IGNORE INTO events (id, name, initial_date, final_date, description, image, status, Address_id)
VALUES (25, 'Carnaval de Salvador', '2024-02-10', '2024-02-15', 'O famoso Carnaval de Salvador, com trios elétricos e muita diversão.', 'https://midias.correio24horas.com.br/2023/04/13/-1574979.jpg', 2, 20);

INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (1, 'Ingresso Padrão', 50.00, 'Acesso a todas as exibições de filmes durante o festival.', 100, 16);

INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (2, 'Ingresso VIP', 150.00, 'Acesso a todas as exibições de filmes e áreas VIP com bebidas e petiscos gratuitos.', 50, 16);

-- Ingressos para o Gramado In Concert (events_id = 17)
INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (3, 'Ingresso Padrão', 80.00, 'Acesso a todos os concertos durante o festival.', 200, 6);

INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (4, 'Ingresso VIP', 200.00, 'Acesso a todos os concertos, áreas VIP e meet & greet com artistas.', 100, 6);

-- Ingressos para o Natal Luz (events_id = 18)
INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (5, 'Ingresso Padrão', 60.00, 'Acesso a todas as atrações do Natal Luz.', 150, 18);

INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (6, 'Ingresso VIP', 180.00, 'Acesso a todas as atrações e áreas VIP com serviços exclusivos.', 75, 18);

-- Ingressos para a Festa da Colônia (events_id = 19)
INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (7, 'Ingresso Padrão', 30.00, 'Acesso a todas as barracas de comida e apresentações culturais.', 200, 19);

INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (8, 'Ingresso VIP', 100.00, 'Acesso a todas as barracas, apresentações culturais e áreas VIP com degustação gratuita.', 50, 19);

-- Ingressos para o Chocofest (events_id = 20)
INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (9, 'Ingresso Padrão', 40.00, 'Acesso a todas as atividades e apresentações do Chocofest.', 120, 20);

INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (10, 'Ingresso VIP', 120.00, 'Acesso a todas as atividades, apresentações e áreas VIP com degustação de chocolates exclusivos.', 60, 20);

-- Ingressos para o Festival do Maracatu (events_id = 21)
INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (11, 'Ingresso Padrão', 45.00, 'Acesso a todas as apresentações culturais do Festival de Maracatu.', 150, 21);

-- Ingressos para o Carnaval de Fortaleza (events_id = 22)
INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (12, 'Ingresso Padrão', 70.00, 'Acesso a todos os blocos e trios elétricos do Carnaval de Fortaleza.', 200, 22);

-- Ingressos para o Festival de Verão de Natal (events_id = 23)
INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (13, 'Ingresso Padrão', 55.00, 'Acesso a todos os shows e atividades ao ar livre durante o festival.', 180, 23);

-- Ingressos para o Festival das Flores (events_id = 24)
INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (14, 'Ingresso Padrão', 35.00, 'Acesso a todas as exposições de flores e feiras.', 200, 24);

-- Ingressos para o Carnaval de Salvador (events_id = 25)
INSERT IGNORE INTO tickets (id, name, value, description, amount, events_id)
VALUES (15, 'Ingresso Padrão', 90.00, 'Acesso a todos os trios elétricos e festas do Carnaval de Salvador.', 250, 25);

-- Criação de usuario admin e usuario de testes
INSERT IGNORE INTO users (id, username, password, email, first_name, last_name, birthday, phone_number, role, city)
VALUES (1, "admin", "$2a$10$bK/fjKqUn/mWw4wpcDmmB.KoUeJ/Odk9C7bPqh5GQtsbLm3BOcmKC", "admin@eventus.com", "admin", "eventus", "2000-01-01","55999999999", 1, 1),
(2, "user", "$2a$10$bK/fjKqUn/mWw4wpcDmmB.KoUeJ/Odk9C7bPqh5GQtsbLm3BOcmKC", "user@eventus.com", "user", "eventus", "2000-01-01","55999999998", 0, 1);
