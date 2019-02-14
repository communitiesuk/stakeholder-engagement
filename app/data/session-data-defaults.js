/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  "stakeholder-anonymous": [
    "no"
  ],
  "stakeholder-full-name": "Adam Butt",
  "stakeholder-date-contact-day": "1",
  "stakeholder-date-contact-month": "1",
  "stakeholder-date-contact-year": "1900",
  "stakeholder-successful-contact": "yes",
  "stakeholder-themes": [
    "communities",
    "jobs-and-growth",
    "local-economies"
  ],
  "stakeholder-summary-of-contact": "Spicy jalapeno short ribs eiusmod meatloaf, elit venison biltong fugiat. Velit frankfurter tongue landjaeger bresaola nulla laborum esse turkey prosciutto buffalo pork loin qui. Aliqua ut laborum hamburger adipisicing pariatur picanha mollit swine do meatball. Pork fugiat short loin anim, ipsum ut pork belly ribeye velit. Tail salami sausage ex ground round, turducken deserunt non. Aute incididunt t-bone cupidatat, sausage ribeye alcatra landjaeger leberkas strip steak est anim.\r\n\r\nTri-tip ribeye eu reprehenderit exercitation, meatball do boudin frankfurter occaecat spare ribs burgdoggen. Shoulder aliqua esse bacon swine tenderloin velit salami buffalo qui. Nostrud irure pork chop corned beef voluptate pork. Culpa salami anim capicola leberkas bacon filet mignon kielbasa irure eiusmod meatloaf do. Fatback tempor tri-tip in pork chop landjaeger ex ipsum officia commodo dolore cillum ullamco. Sirloin swine jerky turducken, ut in cupim spare ribs. Drumstick meatloaf in, turducken cupim cillum nostrud eiusmod ground round occaecat exercitation excepteur capicola quis ball tip.",
  "stakeholder-file-notes": "engagement-notes.docx",
  "stakeholder-other-theme": "",
  "stakeholder-actions": "Tri-tip ribeye eu reprehenderit exercitation, meatball do boudin frankfurter occaecat spare ribs burgdoggen. Shoulder aliqua esse bacon swine tenderloin velit salami buffalo qui. Nostrud irure pork chop corned beef voluptate pork. Culpa salami anim capicola leberkas bacon filet mignon kielbasa irure eiusmod meatloaf do. Fatback tempor tri-tip in pork chop landjaeger ex ipsum officia commodo dolore cillum ullamco. Sirloin swine jerky turducken, ut in cupim spare ribs. Drumstick meatloaf in, turducken cupim cillum nostrud eiusmod ground round occaecat exercitation excepteur capicola quis ball tip.",
  "stakeholder-escalated": "no",
  "stakeholder-next-contact": "2 weeks"
}
