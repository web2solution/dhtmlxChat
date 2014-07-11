# dhtmlxChat

A realtime DHTMLX chat application 


online demo
--------------

*http://www.dhtmlx.com.br*


stack
--------------

  - RabbitMQ
  - Perl(5.16) / Dancer / Twiggy
  - dhtmlx 4.0 + a simple websocket client


install RabbitMQ 
--------------

- *A open source robust messaging system for applications*

	*http://www.rabbitmq.com*

	*http://www.rabbitmq.com/download.html*


install Perl environment
--------------

- *Dancer - a modern and agile Perl framework*
	
	*http://perldancer.org*

- *Twiggy - AnyEvent HTTP server for PSGI*
	
	*https://metacpan.org/pod/Twiggy*

- *Server::Starter - a superdaemon for hot-deploying server programs*

	*https://metacpan.org/pod/distribution/Server-Starter/start_server*


Now on terminal:

	- install perlbrew

	curl -L http://xrl.us/perlbrewinstall | bash


	- Add content to .bashrc

	echo "source ~/perl5/perlbrew/etc/bashrc" >> ~/.bashrc


	- run .bashrc

	. ~/.bashrc


	- install perl distro

   	perlbrew install perl-5.10.1


	- Switch Perl version on terminal

	perlbrew switch perl-5.10.1


	- install cpan minus (cpanm executable)

	curl -L http://cpanmin.us | perl - App::cpanminus


install Perl modules
--------------

Now on terminal:
	
	- cpanm Dancer
	- cpanm Twiggy
	- cpanm Web::Hippie
	- cpanm Moose
	- cpanm Server::Starter


Executing the chat application
--------------

extract the project at /opt/dhtmlxChat

Now on terminal:
	
	- cd /opt/dhtmlxChat
	- start_server --port=80 -- plackup -R /opt/dhtmlxChat/lib -E deployment -s Twiggy --workers=10 bin/app.pl

now open your browser and reach http://localhost/

# important note
	
	this application dont works on Windows OS (I'm sorry Bill)
