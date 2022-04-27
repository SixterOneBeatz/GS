using System.Net;

namespace GS.Application.Common.Exceptions
{
    public class EstatusException : Exception
    {
        public EstatusException(string message, HttpStatusCode statusCode)
            : base(message)
        {
            StatusCode = statusCode;
        }

        public HttpStatusCode StatusCode { get; set; }
    }
}
