import "./App.css";

import { Menu, Button, Text, Modal, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedDrawer, { open : openDrawer, close : closeDrawer }] = useDisclosure(false);
  return (
    <>
      <Drawer
        opened={openedDrawer}
        onClose={closeDrawer}
        withCloseButton={false}
        offset={8}
        radius={10}
        position="bottom"
      >
        <div className="flex flex-col items-center justify-center">
          <Text>Hello geeks we are the best</Text>
          <Button onClick={closeDrawer}>Close</Button>
        </div>
      </Drawer>

      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <div>
          <Text>Hello geeks we are the best</Text>
          <Button onClick={close}>Close</Button>
        </div>
      </Modal>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button>Toggle Geeks</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Messages</Menu.Item>
          <Menu.Item>Gallery</Menu.Item>
          <Menu.Item
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item>Transfer my data</Menu.Item>
          <Menu.Item color="red">Delete my account</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Button onClick={open}>Open Modal</Button>

      <Button onClick={openDrawer}>Open Drawer</Button>
    </>
  );
}

export default App;
