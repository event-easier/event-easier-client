import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { Text, Input, Heading, InputGroup, InputLeftElement, Checkbox, InputRightElement, FormLabel, FormHelperText, FormControl, FormErrorMessage } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { CalendarIcon, ExternalLinkIcon, SearchIcon } from '@chakra-ui/icons'
import { AuthContext } from '../context/AuthProvider'
import { createEvent } from '../services/events'
import EventBackgroundDrawer from '../components/EventBackgroundDrawer'
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Editor from '../components/Editor/Editor'

export default function CreateEvent() {
  const { profileData } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword(!showPassword)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const eventRef = React.useRef();
  const navigate = useNavigate();
  const [eventCreated, setEventCreated] = useState(
    {
      name: "",
      description: "",
      type: {
        event_type: "",
        location: "",
      },
      cover:
        "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=85,width=960,height=480/event-defaults/b3.jpg",
      start_time: 0,
      end_time: 0,
      require_approve: false,
      hosts: [
        {
          gmail: profileData.email,
          user_id: profileData._id,
          name: profileData.name,
          avatar: profileData.avatar
        }
      ],
      guests: [],
    }
  );

  // const url_regex = /^(?:[a-z](?:[-a-z0-9\+\.])*:(?:\/\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:])*@)?(?:\[(?:(?:(?:[0-9a-f]{1,4}:){6}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|::(?:[0-9a-f]{1,4}:){5}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|v[0-9a-f]+\.[-a-z0-9\._~!\$&'\(\)\*\+,;=:]+)\]|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=])*)(?::[0-9]*)?(?:\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@]))*)*|\/(?:(?:(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@]))+)(?:\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@]))*)*)?|(?:(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@]))+)(?:\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@]))*)*|(?!(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@])))(?:\?(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@])|[\x{E000}-\x{F8FF}\x{F0000}-\x{FFFFD}\x{100000}-\x{10FFFD}\/\?])*)?(?:\#(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@])|[\/\?])*)?|(?:\/\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:])*@)?(?:\[(?:(?:(?:[0-9a-f]{1,4}:){6}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|::(?:[0-9a-f]{1,4}:){5}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|v[0-9a-f]+\.[-a-z0-9\._~!\$&'\(\)\*\+,;=:]+)\]|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=])*)(?::[0-9]*)?(?:\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@]))*)*|\/(?:(?:(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@]))+)(?:\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@]))*)*)?|(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=@])+)(?:\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@]))*)*|(?!(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@])))(?:\?(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@])|[\x{E000}-\x{F8FF}\x{F0000}-\x{FFFFD}\x{100000}-\x{10FFFD}\/\?])*)?(?:\#(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\._~\x{A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}!\$&'\(\)\*\+,;=:@])|[\/\?])*)?)$/i
  const url_regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g

  const checkErrorRegex = (regex, input) => {
    return !regex.test(input)
  }

  const handleNameChange = (e) => {
    setEventCreated({
      ...eventCreated,
      name: e.target.value,
    })
  }

  const handleDescriptionChange = (value) => {
    setEventCreated({
      ...eventCreated,
      description: value,
    })
    console.log(eventCreated)
  }

  const handleTypePropsChange = (type) => {
    setEventCreated({
      ...eventCreated,
      type: type,
    })
  }

  const handleCoverChange = (cover) => {
    setEventCreated({
      ...eventCreated,
      cover: cover,
    })
  }

  const handleStartTimeChange = (e) => {
    setEventCreated({
      ...eventCreated,
      start_time: e.target.value,
    })
  }

  const handleEndTimeChange = (e) => {
    setEventCreated({
      ...eventCreated,
      end_time: e.target.value,
    })
  }

  const handleApprovalChange = (e) => {
    setEventCreated({
      ...eventCreated,
      require_approve: e.target.checked,
    })
  }

  const handleHostsChange = (host) => {
    setEventCreated({
      ...eventCreated,
      hosts: e.target.value,
    })
  }

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(19,21,23)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <FormControl isRequired
      // isInvalid={
      //   (checkErrorRegex(url_regex, eventCreated.type.zoom_url)
      //   || checkErrorRegex(url_regex, eventCreated.type.event_url))
      //   && !eventCreated
      // }
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "820px",
            blockSize: "border-box",
            margin: "0px auto 0px auto",
            padding: "100px 16px 0px",
          }}
        >
          <Image
            src={eventCreated.cover}
            maxWidth="820px"
            maxHeight="410px"
          />
          <Button m="16px auto 0px auto" color={"black"}
            onClick={onOpen}
          > Change Cover Photo </Button>
          {isOpen && (
            <EventBackgroundDrawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={eventRef}
              handleCoverChange={handleCoverChange}
            />
          )}
          <div
            className="create-event-container"
          >
            <div
              style={{
                maxWidth: "820px",
                blockSize: "border-box",
                margin: "0 auto",
                padding: "16px"
              }}
            >
              <div
                className='event-name-input'
                style={{
                  maxWidth: "650px",
                  padding: "0 0 16px"
                }}
              >
                <Heading
                  as="b"
                  size={"1.2rem"}
                  color={"#3787ff"}
                  fontSize={"1.2rem"}
                  fontStyle={"bold"}> Event Name </Heading>
                <Input
                  id="input-name"
                  height={"57px!important"}
                  p="8px 0"
                  variant='flushed' placeholder='My Cooking Show'
                  _placeholder={{
                    fontSize: "38px",
                    fontWeight: "bold"
                  }}
                  fontSize={"38px"}
                  onChange={handleNameChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  flexDirection: "column",
                  paddingTop: "1.5rem !important",
                  paddingBottom: "1.5rem !important"
                }}>
                <Heading
                  as="b"
                  fontSize={"1.2rem"}
                  color={"#3787ff"}
                  fontStyle={"bold"}
                  paddingTop={"2rem"}
                >
                  Description
                </Heading>
                <Editor handleDescriptionChange={handleDescriptionChange} />
              </div>
              <div
                style={{
                  paddingLeft: "1rem !important",
                  paddingRight: "1rem !important",
                  margin: "0 auto",
                  maxWidth: "820px",
                  blockSize: "border-box"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    flexDirection: "column",
                    paddingBottom: "1.5rem !important"
                  }}>
                  <Heading
                    as="b"
                    fontSize={"1.2rem"}
                    color={"#3787ff"}
                    m="1rem 0px 1rem -4px"

                  > Where is the event take place?</Heading>
                  <div
                    style={{
                      margin: "16px 0 16px"
                    }}>
                    <Tabs variant={"unstyled"}
                      alignContent={"center"}
                      isFitted
                    >
                      <TabList
                        backgroundColor={"hsla(0,0%,100%,.08)"}
                        color="#535557"
                        padding="0.25rem"
                        maxWidth="380px"
                      >
                        <Tab
                          style={{
                            borderColor: "white",
                            borderRadius: "0.25rem",
                            padding: "4px 12px",
                            // width: "126px",
                            border: 0,
                          }}
                          _selected={{
                            color: "black",
                            bg: "white",
                          }}
                          __hover={{
                            color: "white"
                          }}
                        >
                          In-Person
                        </Tab>
                        <Tab
                          style={{
                            borderColor: "white",
                            borderRadius: "0.25rem",
                            padding: "4px 12px",
                            // width: "126px",
                            border: 0,
                          }}
                          _selected={{
                            color: "black",
                            bg: "white",
                          }}
                          __hover={{
                            color: "white"
                          }}
                        >
                          Zoom
                        </Tab>
                        <Tab
                          style={{
                            borderColor: "white",
                            borderRadius: "0.25rem",
                            padding: "4px 12px",
                            // width: "126px",
                            border: 0,
                          }}
                          _selected={{
                            color: "black",
                            bg: "white",
                          }}
                          __hover={{
                            color: "white"
                          }}
                        >
                          Virtual
                        </Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <div>
                            <FormLabel> Event location </FormLabel>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                              >
                                <SearchIcon />
                              </InputLeftElement>
                              <Input
                                id="input-address"
                                placeholder="What's the address?" maxWidth="500px"
                                onChange={(e) =>
                                  handleTypePropsChange({
                                    event_type: "IN_PERSON",
                                    location: e.target.value,
                                    zoom_id: "",
                                    zoom_password: "",
                                    zoom_url: "",
                                    event_url: ""
                                  })
                                }
                              />
                            </InputGroup>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div maxWidth="1000px">
                            <Text
                              m="0 0 16px"
                            >
                              Once you link your Zoom account, we can automatically generate Zoom meetings for you.
                            </Text>
                            <Button
                              background={"#2D8CFF"}
                              padding={"10px 14px"}
                              color="white"
                            >
                              <ExternalLinkIcon /> Link Zoom Account
                            </Button>
                            <div
                              style={{
                                margin: "24px 0 8px",
                                padding: "0 0 4px"
                              }}
                            >
                              <Text>Or you can enter the meeting information: </Text>
                            </div>
                            <div>
                              <FormControl
                                isRequired
                                isInvalid={
                                  checkErrorRegex(url_regex, eventCreated.type.zoom_url)
                                  && eventCreated.type.zoom_url
                                }
                              >
                                <FormLabel
                                  mt="16px"
                                >Zoom Meeting URL</FormLabel>
                                <Input
                                  id="input-meeting-url"
                                  maxWidth={"320px"}
                                  placeholder="https://zoom.us/j/555555555"
                                  padding={"10px 14px"}
                                  onChange={(e) =>
                                    handleTypePropsChange({
                                      ...eventCreated.type,
                                      event_type: "ZOOM",
                                      location: "",
                                      zoom_url: e.target.value
                                    })
                                  }
                                />
                                {
                                  !checkErrorRegex(url_regex, eventCreated.type.zoom_url) ?
                                    (
                                      <FormHelperText>
                                        The URL for guests to join the Zoom.
                                      </FormHelperText>
                                    )
                                    :
                                    (
                                      <FormErrorMessage>
                                        Invalid input.
                                      </FormErrorMessage>
                                    )
                                }

                              </FormControl>
                              <FormLabel
                                mt="16px"
                              >Zoom meeting ID</FormLabel>
                              <Input
                                id="input-meeting-id"
                                type="number"
                                maxWidth={"320px"}
                                placeholder="123456789"
                                padding={"10px 14px"}
                                onChange={(e) =>
                                  handleTypePropsChange({
                                    ...eventCreated.type,
                                    event_type: "ZOOM",
                                    location: "",
                                    zoom_id: e.target.value
                                  })
                                }
                              />
                              <FormHelperText>
                                The meeting ID you got from Zoom.
                              </FormHelperText>
                              <FormLabel
                                mt="16px"
                              >Zoom Meeting Password</FormLabel>
                              <InputGroup
                                maxWidth={"320px"}
                                size={"md"}>
                                <Input
                                  id="input-meeting-password"
                                  type={showPassword ? 'text' : 'password'}
                                  placeholder="0000000"
                                  padding={"10px 14px"}
                                  onChange={(e) =>
                                    handleTypePropsChange({
                                      ...eventCreated.type,
                                      event_type: "ZOOM",
                                      location: "",
                                      zoom_password: e.target.value
                                    })
                                  }
                                />
                                <InputRightElement width='4.5rem' color={"black"}>
                                  <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
                                    {showPassword ? 'Hide' : 'Show'}
                                  </Button>
                                </InputRightElement>
                              </InputGroup>
                              <FormHelperText>
                                If your meeting has an password, enter it here.
                              </FormHelperText>
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div>
                            <FormControl>
                              <FormLabel> Event URL </FormLabel>
                              <InputGroup>
                                <InputLeftElement
                                  pointerEvents='none'
                                  color='gray.300'
                                  fontSize='1.2em'
                                >
                                  <ExternalLinkIcon />
                                </InputLeftElement>
                                <Input
                                  id="input-event-url"
                                  placeholder="Where is the event taking place?"
                                  maxWidth="500px"
                                  onChange={(e) =>
                                    handleTypePropsChange({
                                      ...eventCreated.type,
                                      event_type: "VIRTUAL",
                                      event_url: e.target.value,
                                      location: "",
                                      zoom_id: "",
                                      zoom_password: "",
                                      zoom_url: ""
                                    })
                                  }
                                />
                              </InputGroup>
                              <FormHelperText>Google Meet, Twitch, Youtube, Discord, wherever it is.</FormHelperText>
                            </FormControl>

                          </div>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    flexDirection: "column",
                    paddingBottom: "1.5rem !important"
                  }}>
                  <Heading
                    as="b"
                    fontSize={"1.2rem"}
                    color={"#ff5965"}
                    m="1rem 0px 1rem -4px"

                  > When will it happen?</Heading>
                  <div
                    style={{
                      margin: "16px 0 16px"
                    }}>
                    <Tabs variant={"unstyled"}
                      alignContent={"center"}
                      isFitted
                    >
                      <TabList
                        backgroundColor={"hsla(0,0%,100%,.08)"}
                        color="#535557"
                        padding="0.25rem"
                        maxWidth="380px"
                      >
                        <Tab
                          style={{
                            borderColor: "white",
                            borderRadius: "0.25rem",
                            padding: "4px 12px",
                            // width: "126px",
                            border: 0,
                          }}
                          _selected={{
                            color: "black",
                            bg: "white",
                          }}
                          __hover={{
                            color: "white"
                          }}
                        >
                          Single Event
                        </Tab>
                        <Tab
                          style={{
                            borderColor: "white",
                            borderRadius: "0.25rem",
                            padding: "4px 12px",
                            // width: "126px",
                            border: 0,
                          }}
                          _selected={{
                            color: "black",
                            bg: "white",
                          }}
                          __hover={{
                            color: "white"
                          }}
                        >
                          Event Series
                        </Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <div>
                            <FormLabel mt="24px"> Start Time </FormLabel>
                            <InputGroup color={"white"}>
                              <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                              >
                                <CalendarIcon />
                              </InputLeftElement>
                              <Input type='datetime-local' maxWidth="500px"
                                onChange={handleStartTimeChange}
                              />
                            </InputGroup>

                            <FormLabel mt="24px"> End Time </FormLabel>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                              >
                                <CalendarIcon />
                              </InputLeftElement>
                              <Input size="md" type='datetime-local' maxWidth="500px"
                                color="white"
                                onChange={handleEndTimeChange}
                              />
                            </InputGroup>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div maxWidth="1000px">
                            Event Series is under development, please wait for us!
                          </div>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    flexDirection: "column",
                    paddingBottom: "1.5rem !important"
                  }}>
                  <Heading
                    as="b"
                    fontSize={"1.2rem"}
                    color={"#47c97e"}
                    m="1rem 0px 1rem -4px"

                  > Access</Heading>
                  <div>
                    <Checkbox padding={"2px"}
                      onChange={(e) => {
                        handleApprovalChange(e)
                      }
                      }
                    >
                      <Text fontSize="16px" m="0px 0px 2px 8px"> Require Registration Approval</Text>
                      <Text fontSize={"14px"} m="0px 0px 0px 8px" color="#939597"> If selected, only approved guests will receive a ticket. </Text>
                    </Checkbox>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    flexDirection: "column",
                    paddingTop: "1.5rem !important",
                    paddingBottom: "1.5rem !important"
                  }}>
                  <Button color="black" maxWidth={"200px"} mt="1.5rem"
                    onClick={async () => {
                      console.log("Event successfully created ")
                      console.log(eventCreated)
                      await createEvent({
                        name: eventCreated.name,
                        description: eventCreated.description,
                        type: eventCreated.type,
                        cover: eventCreated.cover,
                        start_time: eventCreated.start_time,
                        end_time: eventCreated.end_time,
                        require_approve: eventCreated.require_approve,
                        hosts: eventCreated.hosts,
                        guests: [],
                      }).then(() => {
                        navigate("/home")
                      })
                    }}
                    isDisabled={
                      (eventCreated.name == '')
                      ||
                      (eventCreated.type.event_type == "IN_PERSON" && eventCreated.type.location == "")
                      ||
                      (eventCreated.type.event_type == "ZOOM"
                        && eventCreated.type.zoom_password == ""
                        && eventCreated.type.zoom_id == ""
                        && eventCreated.type.zoom_url == ""
                      )
                      ||
                      (eventCreated.type.event_type == "VIRTUAL" && eventCreated.type.event_url == "")
                      ||
                      (eventCreated.start_time == 0)
                      ||
                      (eventCreated.end_time == 0)
                    }
                  >
                    Create Event
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormControl>

    </div>
  )
}
