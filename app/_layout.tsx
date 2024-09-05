import React from 'react';
import { Stack } from 'expo-router';
import Header from './head'; 

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTransparent: false,
        header: () => <Header />,
      }}
    >
    </Stack>
    
  );
};

export default StackLayout;
