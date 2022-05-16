import FeedbackService from "../../src/services/feedbackService";
import { FeedbackParams } from "../../src/types/feedbackParams";

describe("Create feedback", () => {
  const createSpy = jest.fn();
  const sendMailSpy = jest.fn();

  const service = new FeedbackService(
    { create: createSpy },
    { sendMail: sendMailSpy }
  );

  it("should create new feedback", async () => {
    createSpy.mockReturnValueOnce({
      type: "Bug",
      text: "foo",
    });

    const feedbackParams: FeedbackParams = {
      type: "Bug",
      text: "foo",
    };

    expect(await service.create(feedbackParams)).toStrictEqual({
      created: true,
      object: { type: "Bug", text: "foo" },
    });
    expect(createSpy).toHaveBeenCalledTimes(1);
    expect(sendMailSpy).toHaveBeenCalledTimes(1);
  });

  it("should not create new feedback when unexpected error occurs", async () => {
    createSpy.mockReturnValueOnce(undefined);

    const feedbackParams: FeedbackParams = {
      type: "Bug",
      text: "foo",
    };

    expect(await service.create(feedbackParams)).toStrictEqual({
      created: false,
      object: undefined,
    });
    expect(createSpy).toHaveBeenCalledTimes(1);
    expect(sendMailSpy).toHaveBeenCalledTimes(0);
  });

  it("should not create new feedback when type is undefined", async () => {
    const feedbackParams = { text: "foo", screenshot: "test.png" };

    await expect(
      service.create(feedbackParams as FeedbackParams)
    ).rejects.toThrow("Invalid params");
    expect(createSpy).toHaveBeenCalledTimes(0);
    expect(sendMailSpy).toHaveBeenCalledTimes(0);
  });

  it("should not create new feedback when text is undefined", async () => {
    const feedbackParams = { type: "Bug", screenshot: "test.png" };

    await expect(
      service.create(feedbackParams as FeedbackParams)
    ).rejects.toThrow("Invalid params");
    expect(createSpy).toHaveBeenCalledTimes(0);
    expect(sendMailSpy).toHaveBeenCalledTimes(0);
  });

  it("should not create new feedback when screenshot is invalid", async () => {
    const feedbackParams: FeedbackParams = {
      type: "Bug",
      text: "foo",
      screenshot: "test.png",
    };

    await expect(
      service.create(feedbackParams as FeedbackParams)
    ).rejects.toThrow("Invalid screenshot");
    expect(createSpy).toHaveBeenCalledTimes(0);
    expect(sendMailSpy).toHaveBeenCalledTimes(0);
  });
});
