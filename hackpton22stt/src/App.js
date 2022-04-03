
import './App.css';
import Video from './components/Video';
import Upload from './components/Upload';
import Transcript from './components/Transcript';
import React, { Component } from 'react';
import { AppShell, Header, Center, Card, Container, Grid } from '@mantine/core';
import { Logo } from './components/logo';

class App extends Component {
state = {
    data: null
  };

  render() {
    return (
      <AppShell header={
        <Header height={60} p="xs">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <h1><strong>EZN</strong>otes</h1>
          </div>
          
        </Header>
      }>
        <Grid>
          <Grid.Col span={4}>
            <Card shadow="sm" p="lg">
              <Video />
            </Card>
          </Grid.Col>
          
          <Grid.Col span={4}>
            <Card shadow="sm" p="lg">
              <Upload />
            </Card>
          </Grid.Col>

          <Grid.Col span={4}>
            <Card shadow="sm" p="lg">
              <Transcript />  
            </Card>
          </Grid.Col>
          
        </Grid>
      </AppShell>
    );
  }
}

export default App;