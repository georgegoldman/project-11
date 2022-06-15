'use strict'

const
    winston = require('winston'),
    { transport } = require('winston')

var fs = require('fs')

try {
    /**
     * Function responsible for formatting the log lines.
     * @param entry the log entry to format
     * @return {string} the log line that will be passed to the transports
     */
    function formatter(entry) {
        var date = new Date(entry.timestamp()).toISOString()

        var message = ""
        if(entry.message !== undefined) {
            message = entry
        }
    }
} catch (error) {
    
}