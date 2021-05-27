import * as React from 'react';
import * as ReactDom from 'react-dom';
import '@progress/kendo-theme-default/dist/all.css';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'KendoGridSolutionWebPartStrings';
import KendoGridSolution from './components/KendoGridSolution';
import { IKendoGridSolutionProps } from './components/IKendoGridSolutionProps';

export interface IKendoGridSolutionWebPartProps {
  description: string;
}

export default class KendoGridSolutionWebPart extends BaseClientSideWebPart<IKendoGridSolutionWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IKendoGridSolutionProps> = React.createElement(
      KendoGridSolution,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
