import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Home from './Home'
import './styles.module.css'

import useThemeContext from '@theme/hooks/useThemeContext';

const Components = () => {
  const {isDarkTheme} = useThemeContext();
  return <Home {...{isDarkTheme}} />
}; 

export default ()=>{
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  useEffect(()=>{
    console.log(context, siteConfig)
  },[context])

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <Components />
    </Layout>
  );
}
