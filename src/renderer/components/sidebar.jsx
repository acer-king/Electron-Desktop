import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const items = [
  { name: 'home', label: 'Home' },
  { name: 'billing', label: 'Billing' },
  { name: 'settings', label: 'Settings' }
]

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(items)
    console.log("checkmehere1")
  }
  componentDidUpdate() {
    console.log("checkmehere")
  }
  render() {
    return <List disablePadding dense>
      {
        items.map(res => {
          return <ListItem key={res.name} button >
            <ListItemText>{res.label}</ListItemText>
          </ListItem>
        }
        )
      }
    </List>
  }
}
Sidebar.propTypes = {
  name: PropTypes.string
};

export default Sidebar
