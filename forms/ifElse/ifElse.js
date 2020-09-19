// create varialbes
let firstName = prompt('Please enter your first name')
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
let state = prompt('Please enter your state. Abbreviations only and capitizlized.').toUpperCase()
let temp = Number(prompt('What is the tempurture outside in F'))
let messages = ['wear a warm coat, hat, scarf and gloves',
  "wear a warm coat but you won't need a hat, scarf or gloves",
  'wear a less heavy coat',
  'wear a light jacket and smile!'
]

// Message to decided what to wear
if (state == 'NE' && temp <= 32) {
  NSB.MsgBox(`${firstName}, you should ${messages[0]}.`)
} else if (state == 'NE' && temp > 32 && temp < 50) {
  NSB.MsgBox(`${firstName}, you should ${messages[1]}.`)
} else if (state == 'FL' && temp > 32 && temp < 50) {
  NSB.MsgBox(`${firstName}, you should ${messages[2]}.`)
} else if (state == 'FL' && temp >= 50 && temp < 70) {
  NSB.MsgBox(`${firstName}, you should ${messages[3]}.`)
} else {
  NSB.MsgBox(`${firstName}, we are unable to help you today`)
}