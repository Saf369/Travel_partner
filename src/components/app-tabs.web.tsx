import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
} from 'expo-router/ui';
import { Home, MessageCircle, Settings2 as Settings2Icon, Backpack } from 'lucide-react';

import { Navbar, NavButton } from './navbar';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <Navbar>
          <TabTrigger name="home" href="/" asChild>
            <NavButton icon={Home}>Home</NavButton>
          </TabTrigger>
          <TabTrigger name="partner" href="/partner" asChild>
            <NavButton icon={MessageCircle}>Partner</NavButton>
          </TabTrigger>
          <TabTrigger name="backpack" href="/backpack" asChild>
            <NavButton icon={Backpack}>Backpack</NavButton>
          </TabTrigger>
          <TabTrigger name="settings" href="/settings" asChild>
            <NavButton icon={Settings2Icon}>Settings</NavButton>
          </TabTrigger>
        </Navbar>
      </TabList>
    </Tabs>
  );
}
