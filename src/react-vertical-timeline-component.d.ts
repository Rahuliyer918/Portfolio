declare module 'react-vertical-timeline-component' {
    import * as React from 'react';
  
    interface VerticalTimelineProps {
      animate?: boolean;
      className?: string;
      children?: React.ReactNode;
      layout?: '1-column' | '2-columns';
      lineColor?: string;
    }
  
    interface VerticalTimelineElementProps {
      className?: string;
      contentArrowStyle?: React.CSSProperties;
      contentStyle?: React.CSSProperties;
      date?: string;
      dateClassName?: string;
      icon?: React.ReactNode;
      iconClassName?: string;
      iconStyle?: React.CSSProperties;
      position?: 'left' | 'right';
      style?: React.CSSProperties;
      visible?: boolean;
      intersectionObserverProps?: any;
      children?: React.ReactNode;
    }
  
    export class VerticalTimeline extends React.Component<VerticalTimelineProps> {}
    export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> {}
  }
  