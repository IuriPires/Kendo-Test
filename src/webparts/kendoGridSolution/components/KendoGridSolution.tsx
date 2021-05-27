import * as React from 'react';
import styles from './KendoGridSolution.module.scss';
import { IKendoGridSolutionProps } from './IKendoGridSolutionProps';
import { escape } from '@microsoft/sp-lodash-subset';

import KendoGrid from '../components/KendoGrid';

export default class KendoGridSolution extends React.Component<IKendoGridSolutionProps, {}> {
  public render(): React.ReactElement<IKendoGridSolutionProps> {
    return (
      <div className={ styles.kendoGridSolution }>
        <KendoGrid />
      </div>
    );
  }
}
