import { EC2Client, DescribeInstancesCommand } from "@aws-sdk/client-ec2";

export async function listInstances() {
  // Create EC2 client
  const ec2Client = new EC2Client({ region: "us-east-1" });

  try {
    const command = new DescribeInstancesCommand({});
    const response = await ec2Client.send(command);

    console.log("EC2 Instances:");
    response.Reservations?.forEach((reservation) => {
      reservation.Instances?.forEach((instance) => {
        console.log(`Instance ID: ${instance.InstanceId}`);
        console.log(`State: ${instance.State?.Name}`);
        console.log(`Type: ${instance.InstanceType}`);
        console.log("---");
      });
    });
  } catch (error) {
    console.error("Error listing instances:", error);
  }
}
