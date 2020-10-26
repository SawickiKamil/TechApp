import * as React from 'react';
import useStyles from './table.style';
import ITechnology from '../../../model/technology';
import Row from './row/row';
import { Divider } from '@material-ui/core';

interface ITableProps {
  technologies: ITechnology[];
  onDelete: (item: string) => void;
}

const Table = ({ technologies, onDelete }: ITableProps) => {
  const classes = useStyles();

  return (
    <div className={classes.tableWrapper}>
      {technologies.map(({ _id, name, language, description, initRelease }) => (
        <div key={_id}>
          <Row
            onDelete={onDelete}
            _id={_id}
            name={name}
            language={language}
            description={description}
            initRelease={initRelease}
          />
          <Divider style={{ backgroundColor: 'white' }} />
        </div>
      ))}
    </div>
  );
};

export default Table;
