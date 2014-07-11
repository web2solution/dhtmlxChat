# dhtmlxChat 

	A realtime chat application 
	
	# stack
	  * RabbitMQ
	  * Perl(5.16) / Dancer / Twiggy
	  * dhtmlx 4.0 + a simple websocket client
	  
	# install RabbitMQ 

	http://www.rabbitmq.com/
	
	http://www.rabbitmq.com/download.html
	
	
	# install Perl environment
	
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
