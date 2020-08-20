var blessed = require('@hp4k1h5/blessed')
  , contrib = require('../')
  , screen = blessed.screen()
  , gauge = contrib.gauge({label: 'Progress'})
    
screen.append(gauge)

gauge.setPercent(25)

screen.render()
