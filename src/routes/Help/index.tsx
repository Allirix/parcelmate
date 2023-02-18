import { Collapse, Typography } from 'antd';

const { Panel } = Collapse;

function Help() {
  return (
    <div>
      <Typography.Title level={2}>Help and Support</Typography.Title>
      <Typography.Title level={4}>Frequently Asked Questions</Typography.Title>
      <Collapse accordion>
        <Panel header={<Typography.Text strong>Getting Started</Typography.Text>} key="1">
          <Typography.Text>Q: How do I record a new parcel?</Typography.Text>
          <br />
          <Typography.Text>
            {`A: To record a new parcel, click the "Record Parcel" button on the home page and fill
            out the required information.`}
          </Typography.Text>
          <br />
          <br />
          <Typography.Text>Q: How do I edit or delete an existing parcel?</Typography.Text>
          <br />
          <Typography.Text>
            {`A: To edit or delete an existing parcel, click on the parcel in your delivery history
            and select "Edit" or "Delete".`}
          </Typography.Text>
        </Panel>
        <Panel
          header={<Typography.Text strong>Recording and Managing Parcels</Typography.Text>}
          key="2"
        >
          <Typography.Text>Q: How do I optimize my delivery route?</Typography.Text>
          <br />
          <Typography.Text>
            {`A: To optimize your delivery route, click the "Optimize Route" button on the home page
            after you have recorded all of your parcels for the day.`}
          </Typography.Text>
        </Panel>
        <Panel header={<Typography.Text strong>Account and Settings</Typography.Text>} key="3">
          <Typography.Text>Q: How do I change my account information?</Typography.Text>
          <br />
          <Typography.Text>
            {` A: To change your account information, go to the settings page and select "Account
            Settings".`}
          </Typography.Text>
          <br />
          <br />
          <Typography.Text>Q: How do I customize my notification settings?</Typography.Text>
          <br />
          <Typography.Text>
            {`A: To customize your notification settings, go to the settings page and select
            "Notification Settings".`}
          </Typography.Text>
        </Panel>
        <Panel
          header={<Typography.Text strong>Reports and Other Features</Typography.Text>}
          key="4"
        >
          <Typography.Text>
            Q: How do I generate reports on my delivery performance?
          </Typography.Text>
          <br />
          <Typography.Text>
            A: To generate reports on your delivery performance, go to the reports page and select
            the desired report.
          </Typography.Text>
        </Panel>
        <Panel header={<Typography.Text strong>Help and Support</Typography.Text>} key="5">
          <Typography.Text>Q: How do I get help or support?</Typography.Text>
          <br />
          <Typography.Text>
            A: If you need help or support, please contact our customer service team by phone or
            email.
          </Typography.Text>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Help;
