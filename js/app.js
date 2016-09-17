
var app = angular.module('contactApp', ['ngAnimate']);
	app.controller('contactAppController', function() {

		var contactList = this;
		contactList.contacts = [

			{
				name:  'John Doe',
				email: 'johndoe@gmail.com',
				phone: '222222222'
			}

		];

		contactList.addContact = function()
		{
			contactList.contacts.push({
				name:  contactList.name,
				email: contactList.email,
				phone: contactList.phone
			});

			contactList.name  = '';
			contactList.email = '';
			contactList.phone = '';
		}

		contactList.removeContact = function(contact)
		{
			var removedContact = contactList.contacts.indexOf(contact);
			contactList.contacts.splice(removedContact, 1);
		}

	});