var mongoose = require('mongoose');
var Event = require('./../models/event.js')
var User = require('../models/user')

module.exports = {
    index,
    new: newEvent,
    show,
    create,
    edit,
    update,
    delete: deleteOne
}

function index(req, res) {
    Event.find({
        userId: req.user
    }, function (err, events) {
        res.render('events/index', {
            title: 'Listings',
            user: req.user,
            events
        });
    });
}

function newEvent(req, res) {
    Event.find({
        userId: req.user
    }, function (err, events) {
        res.render('events/new', {
            title: 'Create Event',
            user: req.user,
            events
        });
    })
}


function show(req, res) {
    Event.findById(req.params.id)
        .exec(function (err, event) {
            res.render('events/show', {
              title: `${event.name}`,
                user: req.user,
                event
            });
        });
}

// 
function create(req, res) {
    var event = new Event(req.body);
    event.save(function (err) {
        if (err) return res.redirect('/events/new');
        res.redirect(`/events`);
    });
}

function deleteOne(req, res) {
    Event.findByIdAndRemove(req.params.id).then(function (err) {
        res.redirect('/events');
    })
}

function edit(req, res) {
    Event.findById(req.params.id)
        .exec(function (err, event) {
            res.render(`events/edit`, {
                title: `Edit ${event.name} Posting`,
                user: req.user,
                event
            });
        });
}

function update(req, res) {
    Event.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect(`/events`);
    })
}

