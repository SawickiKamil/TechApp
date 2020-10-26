import * as React from 'react'
import useStyles from './table.style'
import ITechnology from '../../../model/technology'
import Row from './row'
import { Divider } from '@material-ui/core'


interface ITableProps {
    technologies: ITechnology[]
    onDelete: (item: string) => void
}

const Table = ({ technologies, onDelete }: ITableProps) => {
    const classes = useStyles()

    return (
        <div className={classes.tableWrapper}>
            {technologies.map(({ _id, name, language, description, initRelease }) => (
                <div key={_id}>
                    <Divider style={{ backgroundColor: 'white' }} />
                    <Row onDelete={onDelete} _id={_id} name={name} language={language} description={description} initRelease={initRelease} />
                </div>
            ))}
        </div>
    )
}

export default Table