import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from 'styleguide';
import Input from 'components/Input';
import CalendarPopup from 'components/CalendarPopup';
import Notifications from 'components/Notifications';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app styleguide-v2">
        <h1>Test Assignment</h1>
        <div className="sections">
          <section>
            <h2>Input Styling</h2>
            <div className="row">
              <Input 
                label="Field not available" 
                placeholder="Field not available"
                disabled />
            </div>
            <div className="row">
              <Input 
                label="Caption for field" 
                placeholder="Static" 
                 />
            </div>
            <div className="row">
              <Input 
                label="Caption for field" 
                placeholder="Hover" 
                />
            </div>
            <div className="row">
              <Input 
                label="Caption for field" 
                value="Text exemple for field" 
                />
            </div>
            <div className="row">
              <Input 
                type="password"
                label="Caption for field" 
                value="Text exemple for field" 
                success
                />
            </div>
            <div className="row">
              <Input 
                label="Caption for field" 
                value="Text exemple for field" 
                icon="error"
                error="Error text"
                />
            </div>
            <div className="row">
              <Input 
                placeholder="Search" 
                icon="search" readOnly search />
            </div>
          </section>
          <section>
            <h2>Calendar Popup</h2>
            <CalendarPopup />
          </section>
          <section>
            <h2>Notifications Component</h2>
            <Notifications />
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
