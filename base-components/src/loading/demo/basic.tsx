/**
 * @title 基本用法
 * @description 最简单的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Loading } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <div>
        LTR
        <Loading tip="加载中...">
          <div className="demo">test</div>
        </Loading>
      </div>
      <div>
        RTL
        <Loading tip="加载中..." rtl>
          <div className="demo">test</div>
        </Loading>
      </div>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .demo {
    width: 500px;
    background-color: #f2f3f7;
    text-align: center;
    padding: 50px;
  }
`
