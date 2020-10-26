import * as React from 'react'
import useStyles from './list.styles'
import { ListItemText, Typography, List } from '@material-ui/core'
import classNames from 'classnames'

interface IListProps {
    technologies: string[]
    title: string
    description?: string
}


const CustomList = ({ technologies, title, description }: IListProps) => {
    const classes = useStyles()
    const isFrontEnd = title === 'Front-End:'

    return (
        <div className={classes.root}>
            <Typography className={classes.listTitleStyle}>{title}</Typography>
            <List className={classes.listWrapper}>
                {technologies?.map((item) => (
                    <div key={item} className={classes.listItemWrapper}>
                        <ListItemText className={classNames(classes.listItemText, {
                            [classes.isFrontEndStyle]: isFrontEnd,
                            [classes.isNotFrontEndStyle]: !isFrontEnd
                        })}>{item}</ListItemText>
                    </div>
                ))}
            </List>
            <Typography className={classes.descriptionStyle}>{description}</Typography>
        </div>
    )
}

export default CustomList