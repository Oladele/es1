export default function( server ) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
  server.createList('company', 4);
  var company = server.create('company', {name: "DEFCON"});
  server.createList('network-site', 2, {
  	company: company.id
  });
}
