import React, { Component } from 'react'
import { Accordion, Icon, Segment, Image } from 'semantic-ui-react'

export default class Generators extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Linux - Command Line
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
            <p>Run this in your command line and write your seed in a safe place:</p>
            <Segment>
                cat /dev/urandom |tr -dc A-Z9|head -c$	&#123;1:-81	&#125;
            </Segment>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Mac OSx - Command Line
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>Run this in your command line and write your seed in a safe place:</p>
            <Segment>
                cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1
            </Segment>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Windows - KeePass
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            At this moment, Windows doesn't have a reliable command line method. But you can download <a href="https://keepass.info/">KeePass </a> 
            go to Tools > Generate Password and
            generate your seed with the following options:
          </p>
          <Segment>
            <Image src='../img/keepass.png' size="medium" />
          </Segment>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Dice
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
                <p>
                You can use either one or two dice, although two will go much faster. Simply roll once for the column and then again for the row.
                If you end up in the sixth row, re-roll for the row. If you end up in the last three columns on the fifth row, try again.
                </p>
                <Segment>
                    <Image src='../img/dice.png' size="medium" />
                </Segment>
                <a href="https://www.reddit.com/r/Iota/comments/7hos4t/secure_dice_roll_seed_generator_template/">Credits to ThroughEnd</a>
            </Accordion.Content>
        </Accordion>
    )
  }
}