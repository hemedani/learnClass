function loopScope () {
  var i = 50
  var j = 99

  for (var i = 0; i < 10; i++) {}

  console.log('i =', i)

  for (let j = 0; j < 10; j++) {}

  console.log('j =', j)
}

loopScope()
