# dhtmlxChat

A realtime DHTMLX chat application 


online demo
--------------

	http://www.dhtmlx.com.br

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


install perl modules
--------------

Now on terminal:
	
	- cpanm Dancer
	- cpanm Twiggy
	- cpanm Web::Hippie
	- cpanm Moose

# important note
	
	this application dont works on Windows OS (I'm sorry Bill)
