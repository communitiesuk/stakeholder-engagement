formatInput = (field, type, data) => {
    // create an output object, destructure the overview, check for date fields (and rename to the day field otherwise its always undefined)
    const key = (type == 'date') ? `${field}-day` : id;
    const populated = (key in data) && (data[key] != "");
    const input = {
      radio : () => options[data[key]],
      checkbox: () => data[key].map((item) => options[item]).join('\n'),
      dates : () => ['day','month','year'].map((cal) => data[`${field}-${cal}`]).join('/')
    };
    
    return populated ? input[type]() : "No information was added"; 
  };

  module.exports = formatInput;