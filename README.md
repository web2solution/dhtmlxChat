# dhtmlxChat 

A realtime DHTMLX chat application 

# online demo

	<a href="http://www.dhtmlx.com.br/" target="_blank">visit the chat</a>

# stack
  - RabbitMQ
  - Perl(5.16) / Dancer / Twiggy
  - dhtmlx 4.0 + a simple websocket client
  
# install RabbitMQ 

	<a href="http://www.rabbitmq.com/" target="_blank">http://www.rabbitmq.com/</a>

	<a href="http://www.rabbitmq.com/download.html" target="_blank">http://www.rabbitmq.com/download.html</a>


# install Perl environment

	- Dancer - a modern and agile Perl framework
		
		<a href="http://perldancer.org/" target="_blank">http://perldancer.org/</a>
    
	- Twiggy - AnyEvent HTTP server for PSGI
		
		<a href="https://metacpan.org/pod/Twiggy" target="_blank">https://metacpan.org/pod/Twiggy</a>

* install perlbrew

	curl -L http://xrl.us/perlbrewinstall | bash


* Add content to .bashrc

	echo "source ~/perl5/perlbrew/etc/bashrc" >> ~/.bashrc


* run .bashrc

	. ~/.bashrc


* install perl distro

   perlbrew install perl-5.10.1


* Switch Perl version on terminal

	perlbrew switch perl-5.10.1


* install cpan minus -> cpanm tool

	curl -L http://cpanmin.us | perl - App::cpanminus


# install perl modules

  * cpanm Dancer
  * cpanm Twiggy
  * cpanm Web::Hippie
  * cpanm Moose
