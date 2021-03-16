import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Home from './Home'
import './styles.module.css'
import useThemeContext from '@theme/hooks/useThemeContext';

const Components = () => {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  useEffect(()=>{
    if(isDarkTheme){
      setDarkTheme()
    }else{
      setLightTheme()
    }
  },[isDarkTheme, setDarkTheme, setLightTheme])
  return <Home {...{isDarkTheme}} />
}; 

export default ()=>{
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Онлайн платформа для роботи з будівельними нормами. Наша мета — зробити будівельні норми зручними у користуванні та інтегрувати інструменти автоматичної валідації та погодження у проектний процес.">
        <Components />
    </Layout>
  );
}
