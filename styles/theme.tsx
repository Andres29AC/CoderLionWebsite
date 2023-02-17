import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        color: 'black',
        background: '#ddd',
        '--gradient': 'linear-gradient(45deg, #845ec2, #d65db1, #ff5f91, #ff9671, #ffc75f, #f9f871)',
        backgroundImage: 'var(--gradient)',
        backgroundSize: '400%',
        animation: 'bg-animation 10s infinite alternate',
      },
      animations: {
        '@keyframes bg-animation': {
          '0%': {
            'background-position': 'left',
          },
          '100%': {
            'background-position': 'right',
          },
        },
      },
    }),
  },
  
});

export default theme;
