import React from 'react'

export interface LoginProps {
  config?: object
  enablePanel?: string
}

declare const Login: React.SFC<LoginProps>
