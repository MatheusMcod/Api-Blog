import { Get, Route } from 'tsoa';

interface ApiResponse {
  message: String;
}

@Route('api')
export default class ApiController {
  @Get('/')
  public async getMessage(): Promise<ApiResponse> {
    return {
      message: 'Api response!'
    }
  }
}