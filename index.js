#!/usr/bin/env node
var cli = require('./lib/cli');
var program  = require('commander');

program.version('0.0.1').usage('[command] [option]')

program
	.command('init [dir]')
	.description('init application workspace')
	.option('--demo', 'include demo code')
	.action(function(dir,options){
		cli.init(dir,options);
	});

program
	.command('restful [name]')
	.description('build restful style controller code')
    .action(function(name){
	    cli.restful(name);
	});

program
	.command('build [name]')
	.description('build model code')
    .option('--mysql', 'build model code for mysql driver')
    .action(function(name ,options){
	    cli.model(name,options);
	});
  	

program.parse(process.argv);
