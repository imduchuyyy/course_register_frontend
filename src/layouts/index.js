import React, { useCallback, useEffect, useState } from 'react'
import { useAuth } from '@contexts'
import axios from 'axios'

const LayoutDesign = props => {
  const { children } = props

  return <div>{children}</div>
}

export default LayoutDesign
