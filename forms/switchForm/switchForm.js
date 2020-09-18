let state1 = prompt('Please enter your state. Abbreviations only and capitizlized.').toUpperCase()
let temp1 = Number(prompt('What is the tempurture outside in F'))
let messages1 = ['wear a warm coat, hat, scarf and gloves', 
"wear a warm coat but you won't need a hat, scarf or gloves",
'wear a less heavy coat',
'wear a light jacket and smile!']

// Message to decided what to wear
switch(true){
  case (state == 'NE' && temp <= 32):
    NSB.MsgBox(`${firstName}, you should ${messages[0]}.`)
    break
  case (state == 'NE' && temp > 32 && temp < 50):
    NSB.MsgBox(`${firstName}, you should ${messages[1]}.`)
    break
  case (state == 'FL' && temp > 32 && temp < 50):
    NSB.MsgBox(`${firstName}, you should ${messages[2]}.`)
    break
  case (state == 'FL' && temp >= 50 && temp < 70):
    NSB.MsgBox(`${firstName}, you should ${messages[3]}.`)
    break
  default:
    NSB.MsgBox(`${firstName}, we are unable to help you today`)
}
