const express = require('express');
const router = express.Router();

var bookshelf = require('../../bookshelf');

// BASIC mysql connection
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'visualmedia',
    database: 'visualmedia'
});
connection.connect();

router.get(['/example-data'], function (req, res) {

    var sql = `
      SELECT
        *
      FROM
        projects
      FULL OUTER JOIN
        publications
      ON
        projects.id = publications.id
      GROUP BY
        projects.id
    `;

    connection.query(sql, function (err, results, fields) {
      res.send(results);
    })
})

router.get(['/projects-data'], function (req, res) {

  var sql = `
    SELECT 
      projects.*, 
      teams.shortname as teams_shortname,
      people.name as people_name,
      people.id as people_id,
      partners.name as funding_name
    FROM 
      projects
    LEFT JOIN
      teams ON teams.id = projects.teams_id
    LEFT JOIN
      people ON people.id = projects.people_id
    LEFT JOIN
      partners ON partners.id = projects.funding_id
    GROUP BY
      projects.id
  `
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  })
})

router.get(['/publication-data'], function (req, res) {

  var sql = `
    SELECT 
      pub.*,
      teams.shortname as teams_name,
      GROUP_CONCAT(people.name) as people_name,
      GROUP_CONCAT(people.id) as people_id
    FROM 
      publications as pub
    INNER JOIN 
      people_publications as p_p
    ON
      pub.id = p_p.publications_id
    INNER JOIN 
      people 
    ON
      p_p.people_id = people.id
    LEFT JOIN
      teams
    ON
      pub.teams_id = teams.id
    GROUP BY
      pub.id 
  `
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  })
})

router.get(['/publication-data-individual/:id'], function (req, res) {
  var id = req.params.id;
  var sql = `
    SELECT 
      pub.*,
      teams.shortname as teams_name,
      GROUP_CONCAT(people.name) as people_name,
      GROUP_CONCAT(people.id) as people_id
    FROM 
      publications as pub
    INNER JOIN 
      people_publications as p_p
    ON
      pub.id = p_p.publications_id
    INNER JOIN 
      people 
    ON
      p_p.people_id = people.id
    LEFT JOIN
      teams
    ON
      pub.teams_id = teams.id
    WHERE
      pub.id = ${id}
  `
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  })
})

router.get(['/people-data'], function (req, res) {
  var sql = `
    SELECT people.*, teams.shortname
    FROM 
      people 
    LEFT JOIN
      teams
    ON
      people.teams_id = teams.id
    GROUP BY
      people.id
  `
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  })
})


router.get(['/people-data-person/:id'], function (req, res) {
  var id = req.params.id;
  var sql = `
    SELECT 
      people.*, 
      teams.shortname,
      GROUP_CONCAT(publications.title) as pub_title,
      GROUP_CONCAT(publications.conference) as pub_conference,
      GROUP_CONCAT(projects.name) as projects_name
    FROM 
      people 
    INNER JOIN 
      people_publications as p_p
    ON
      people.id = p_p.people_id
    INNER JOIN 
      publications
    ON
      p_p.publications_id = publications.id
    LEFT JOIN
      teams
    ON
      people.teams_id = teams.id
    LEFT JOIN
      projects
    ON
      people.id = projects.people_id
    WHERE
      people.id = ${id} 
  `
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  })
})

router.get(['/partner-data'], function (req, res) {
  var sql = `
    SELECT partners.*
    FROM 
      partners
  `
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  })
})

router.get(['/seminar-data'], function (req, res) {
  var sql = `
    SELECT 
      seminars.*, 
      people.name as people_name,
      people.type as people_type,
      people.img as people_img
    FROM 
      seminars
    LEFT JOIN
      people
    ON
      seminars.people_id = people.id
    GROUP BY
      seminars.id
  `
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  })
})

router.get(['/download-data'], function (req, res) {
  var sql = `
    SELECT downloads.*
    FROM 
      downloads
  `
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  })
})

router.get(['/researchArea-data'], function (req, res) {
  var sql = `
    SELECT teams.*
    FROM 
      teams
  `
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  })
})

router.get(['/issues-data'], function (req, res) {
  var sql = `
    SELECT issues.*
    FROM 
      issues
  `
  connection.query(sql, function (err, results, fields) {
    res.send(results);
  })
})

//////////////


//////////////

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;