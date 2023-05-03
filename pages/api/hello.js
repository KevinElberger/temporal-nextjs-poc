import { Connection, Client } from '@temporalio/client';
import { example } from '../../temporal/src/workflows';
import { nanoid } from 'nanoid';

export default async function helloAPI(req, res) {
  const connection = await Connection.connect();

  const client = new Client({
    connection,
    // namespace: 'foo.bar', // connects to 'default' namespace if not specified
  });

  const handle = await client.workflow.start(example, {
    args: ['Temporal'],
    taskQueue: 'hello-world',
    // in practice, use a meaningful business ID, like customerId or transactionId
    workflowId: 'workflow-' + nanoid(),
  });

  console.log(`Started workflow ${handle.workflowId}`);

  res.status(200).json({ name: 'John Doe' });
}
