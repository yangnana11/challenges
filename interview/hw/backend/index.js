var express = require("express");
var request = require("request");
var rp = require('request-promise');
var fetch = require('node-fetch');
var app = express();
app.get("/api/ping", (req, res, next) => {
    res.status(200).json({"success": true});
});
app.get("/api/posts", (req, res, next) => {
    if (!req.query.tags) {
        res.status(400).json({"error": "Tags parameter is required"});
        return;
    }
    if (req.query.sortBy) {
        if (!(req.query.sortBy=="id" || 
        req.query.sortBy=="reads" ||
        req.query.sortBy=="likes" ||
        req.query.sortBy=="popularity")) {
            res.status(400).json({"error": "sortBy parameter is invalid"});
            return;
        }
    }
    if (req.query.direction) {
        if (!(req.query.direction=="asc" || 
        req.query.direction=="desc")) {
            res.status(400).json({"error": "direction parameter is invalid"});
            return;
        }
    }
    let tags = req.query.tags.split(",");
    let sortBy = req.query.sortBy;
    let direction = req.query.direction;
    fetchData(tags).then(data => {
        data = arrUnique(data);
        data = arrSort(data, sortBy, direction);
        res.status(200).json({"posts": data});
    });

})

async function fetchData(tags) {
    let result = [];
    for (let i =0; i<tags.length; i++){
       try {
          let a = await fetch('https://hw/api/assessment/blog/posts?tag='+tags[i])
          let js = await a.json();
          result = result.concat(js.posts);
       } catch (e) {
          console.error(e)
       }
    }
    return result;
 }
function arrSort(arr, key, direction) {
    if (!key) {
        key = "id";
    }
    if (!direction) {
        direction = 1
    } else {
        if (direction == "asc") {
            direction = 1;
        } else {
            direction = 0;
        }
    }
    if (direction == 1) {
        arr.sort(function (a, b) {
            return a[key] - b[key];
        });
    } else {
        arr.sort(function (a, b) {
            return b[key] - a[key];
        });
    }
    return arr;
}
function arrUnique(arr) {
    var cleaned = arr.filter((arr, index, self) =>
    index === self.findIndex((t) => (t.id === arr.id)));
    return cleaned;
}

app.listen(3000, () => {
 console.log("Server running on port 3000");
});