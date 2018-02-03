import micro, { send } from 'micro'
import { get, post, router } from 'microrouter'
import { microGraphql, microGraphiql } from 'apollo-server-micro'

micro().listen(3000)
