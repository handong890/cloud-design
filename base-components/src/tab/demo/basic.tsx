/**
 * @title 简单用法
 * @description 使用 Tab 最简单的例子。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Tab>
      <Tab.Item title="Home" key="1">
        Home content
      </Tab.Item>
      <Tab.Item title="Documentation" key="2">
        Doc content
      </Tab.Item>
      <Tab.Item title="Help" key="3">
        Help Content
      </Tab.Item>
    </Tab>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`
